const typography = {
  h1: {
    fontSize: '4xl',
    fontWeight: 600,
    mb: 6,
  },
  h2: {
    fontSize: '3xl',
    fontWeight: 600,
    mb: 6,
  },
  h3: {
    fontSize: '2xl',
    fontWeight: 600,
    mb: 6,
  },
  h4: {
    fontSize: 'xl',
    fontWeight: 600,
    mb: 6,
  },
  h5: {
    fontSize: 'lg',
    fontWeight: 600,
    mb: 6,
  },
  h6: {
    fontSize: 'md',
    fontWeight: 600,
    mb: 6,
  },
  a: {
    color: 'primary',
    _hover: {
      textDecoration: 'underline',
    },
  },
  p: {
    fontSize: 'md',
    fontWeight: 500,
    mb: 5,
  },
  ol: {
    marginInlineStart: '1.1em',
    mb: 5,
    p: { mb: 0 },
    ul: { mb: 0 },
    ol: { mb: 0 },
  },
  ul: {
    marginInlineStart: '1.1em',
    mb: 5,
    p: { mb: 0 },
    ul: { mb: 0 },
    ol: { mb: 0 },
  },
  blockquote: {
    p: 5,
    my: 5,
    backgroundColor: 'rgba(204, 85, 0, 0.2)',
    borderLeft: '4px solid',
    borderColor: 'primary',
    'p:last-child': { mb: 0 },
  }
  
}

export default typography;
