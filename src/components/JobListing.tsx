import React from 'react';
import { Job } from '../types';
import { Box, Text } from '@chakra-ui/react';

export const JobListing = ({ company, title, years, description }: Job) => (
  <Box as="article" mb="8">
    <Text fontSize="lg" color="primary" fontWeight="600">{title}.</Text>
    <Text fontSize="lg" mb="2">{company} <Text as="span" fontWeight="300">{years}</Text></Text>
    <Text>{description}</Text>
  </Box>
);
