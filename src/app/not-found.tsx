import { Container, Heading, Text, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <Container size="sm" className="flex flex-col items-center">
        <span className="font-heading text-8xl font-black text-accent-violet">
          404
        </span>
        <Heading as="h1" size="h2" className="mt-4 mb-3">
          Page not found
        </Heading>
        <Text variant="muted" className="mb-8 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved to another URL.
        </Text>
        <Button href="/" variant="primary" size="md">
          Back to Homepage
        </Button>
      </Container>
    </main>
  );
}

