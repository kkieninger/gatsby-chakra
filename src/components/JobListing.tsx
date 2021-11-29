import React, { FC } from 'react';
import { Job } from '../types';
import { Box, Text, Heading } from '@chakra-ui/react';

export const JobListing: FC<Job> = ({ company, title, years, description }) => (
  <Box as="article" mb="8">
    <Text fontSize="lg" color="primary" fontWeight="600">{title}.</Text>
    <Text fontSize="lg" mb="2">{company} <Text as="span" fontWeight="300">{years}</Text></Text>
    <Text>{description}</Text>
  </Box>
);
