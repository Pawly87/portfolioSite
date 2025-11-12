import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSFTP = () => {
  return (
    <div className="container-section py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-background-paper rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">SFTP File Transfer — Demo</h1>
        <p className="text-gray-300 mb-6">A public-safe, sanitized write-up and demo that demonstrates the architectural patterns used to transfer CSV offloads to external SFTP endpoints.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Quick summary</h2>
          <p className="text-gray-300">This demo shows a flow where CSV files (offloaded from a data warehouse) are uploaded to S3, processed by a serverless component, and delivered via a transfer component that runs in an isolated VPC to reach external SFTP endpoints. The live demo is a recreated, non-proprietary example.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Tech stack</h3>
          <div className="flex flex-wrap gap-2">
            {['AWS S3','AWS Lambda','VPC','SQS (optional)','CloudWatch'].map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-dark text-white">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Sanitized architecture</h3>
          <div className="bg-white rounded-md p-4">
            <img src="/src/assets/sftp-architecture.svg" alt="Sanitized architecture diagram" className="w-full h-auto" />
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Key features (public demo)</h3>
          <ul className="list-disc ml-5 text-gray-300">
            <li>CSV file upload UI (React)</li>
            <li>Serverless processing (validation, metadata enrichment)</li>
            <li>Transfer component simulating secure outbound SFTP delivery</li>
            <li>Retry/backoff and dead-letter handling patterns</li>
            <li>Structured logging and basic metrics</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Demo & code</h3>
          <p className="text-gray-300 mb-3">A public demo repository and live demo will be linked here once published. For now, you can view the sanitized case study:</p>
          <Link to="/" className="inline-block bg-primary text-black px-4 py-2 rounded-md font-medium">Back to home</Link>
        </section>
      </div>
    </div>
  );
};

export default ProjectSFTP;
