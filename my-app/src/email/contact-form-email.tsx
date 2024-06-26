import React from "react";
import { Html, Head, Body, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string,
    email: string
}

export default function ContactFormEmail({
    message,
    email
}: ContactFormEmailProps) {
    return <Html>
        <Head />
        <Preview>
            New message from your portfolio website.
        </Preview>
        <Tailwind>
            <Body className="bg-gray-100">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">You have received the following message from the contact form.</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender email is: {email}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
}