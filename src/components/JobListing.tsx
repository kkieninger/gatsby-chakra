import React, { FC } from 'react';
import { Job } from '../types';

export const JobListing: FC<Job> = ({ company, title, years, description }) => {
  return (
    <article>
      <div>
        <p>{title}.</p>
        <p>
          {company} <span>{years}</span>
        </p>
      </div>
      <p>{description}</p>
    </article>
  );
};
