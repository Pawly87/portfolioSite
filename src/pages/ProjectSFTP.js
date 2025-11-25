import React from 'react';
import { Link } from 'react-router-dom';
import SFTPProjectImage from '../assets/SFTPProject.png';

const ProjectSFTP = () => {
  return (
    <div className="container-section py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-background-paper rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">SFTP File Transfer — Demo</h1>
        <p className="text-gray-300 mb-6">This service was created as part of an intergration between between an LMS and a 3rd party Talent Marketplace to transfer learning object data (title, URL, description etc). Because of the requirement of curating training before sharing and training sourced outside of the LMS, an API connection wasn't suitable. The third party required a CIDR list to be whitelisted on their end in order to recieve transfers. My solution was to create an automated transfer to an SFTP Server.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Quick summary</h2>
          <p className="text-gray-300">The diagram shows a flow where CSV files (offloaded from a data warehouse or manually uploaded) are uploaded to S3, processed by a serverless component, and delivered via a transfer component that runs in an isolated VPC to reach external SFTP endpoints, with Secrets Manager storing your credentials and SFTP url. The demo Cloudformation Template is a recreated, non-proprietary example. Triggerd by PUT events, files could be manually uploaded or offloaded from Redshift or DynamoDB.  It can also be customised to run as a CRON job via Eventbridge. Please follow the intructions in the Git repo to setup.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Tech stack</h3>
          <div className="flex flex-wrap gap-2">
            {['AWS S3','AWS Lambda', 'Secrets Manager', 'VPC'].map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-dark text-white">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Sanitized architecture</h3>
          <div className="bg-white rounded-md p-4">
            <img src={SFTPProjectImage} alt="Sanitized architecture diagram" className="w-full h-auto" />
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
