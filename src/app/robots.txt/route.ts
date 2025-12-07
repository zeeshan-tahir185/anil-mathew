import { NextResponse } from 'next/server';

export const GET = () => {
  const content = `
User-agent: *
Disallow:

Sitemap: https://www.anilmathews.com/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
