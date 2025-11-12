# Secure SFTP File Transfer — Public Case Study

**Short summary**

A scalable, serverless pipeline to reliably transfer offloaded CSV files (exported from a data warehouse) to partner SFTP endpoints. The public write-up below focuses on architecture, design decisions, and outcomes while omitting any proprietary details.

**Role**

Lead backend engineer — responsible for system design, serverless implementation, reliability patterns, and secure network configuration.

**Duration**

6 months (design, implementation, and operational handover)

---

## Problem statement

Multiple partner integrations required scheduled delivery of large CSV exports (offloaded from a data warehouse) to external SFTP endpoints. The solution needed to be reliable, observable, and secure, with retry and idempotency guarantees.

## High-level solution

Files are exported from the data warehouse into an object store (CSV files). An event-driven serverless pipeline ingests the files, applies lightweight processing/validation, and moves them to the partner endpoint using an isolated transfer component running in a VPC for secure outbound connectivity.

> Note: the original system handled proprietary business transforms. This case study only describes the public-safe architecture and patterns.

## Tech stack

- AWS S3 (staging and transfer buckets)
- AWS Lambda (event-driven processing)
- VPC (network isolation for outbound transfers)
- IAM (least-privilege roles)
- (Optional) SQS for buffering and retries
- CloudWatch for logging and metrics

## Architecture (sanitized)

Refer to the architecture diagram: `src/assets/sftp-architecture.svg`.

Key flow:

1. Data warehouse exports a CSV file and writes it to the S3 staging bucket (offload).
2. S3 event triggers a Lambda function for validation and metadata enrichment.
3. Lambda hands off the transfer job to a transfer component that runs with VPC egress access to reach external SFTP endpoints. The transfer component enforces encryption-in-transit and applies retry/backoff logic.
4. Successful transfers are logged; failures are retried with exponential backoff and alerted to on-call.

## Key responsibilities & contributions

- Designed the serverless, event-driven flow to decouple ingestion and transfer
- Implemented Lambda processors with idempotency and exactly-once delivery semantics where required
- Used VPC egress with NAT/managed gateway to securely deliver outbound SFTP connections
- Implemented retry/backoff, dead-lettering (SQS DLQs), and operational alerts
- Authored sanitized IaC templates and created developer runbooks for safe deployments

## Reliability and security patterns

- Network isolation: transfer component runs in a VPC with tightly scoped egress
- Least-privilege IAM roles for S3 and Lambda
- Idempotency keys to prevent duplicate deliveries when retries occur
- Observability: structured logs, CloudWatch metrics, and alarms for transfer failures and latency

## Outcomes (sanitized)

- Improved delivery reliability (target SLA met; example non-sensitive metric: >99.9% successful deliveries week-over-week)
- Reduced operational toil through automated retries and clearer observability
- Faster incident resolution thanks to detailed logs and per-file tracking IDs

## Demo / recreated version

To avoid exposing proprietary code, a lightweight public demo was created that demonstrates the same architectural patterns: a React upload UI that writes CSV files to S3 and a small processing component that simulates the transfer. The demo uses a mock SFTP endpoint (or can write to a secondary S3 bucket as a stand-in) and includes sanitized IaC examples.

(Links to the public demo repository and live demo can be added here once available.)

## Lessons learned

- Design for failure: network calls to external systems need robust backoff and idempotency
- Observability needs to be built-in from day one (correlation IDs, per-file traces)
- Isolate outbound network access for security and compliance

---

*If you'd like, I can now create the small public demo repository and an example React upload service that uploads CSVs and triggers a sanitized processing flow.*