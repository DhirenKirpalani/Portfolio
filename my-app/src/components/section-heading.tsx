"use client"

import React from 'react';

type SectionHeadingProps = {
    heading: string;
}

export default function SectionHeading({ heading }: SectionHeadingProps) {
    return (
        <h2 className="text-3xl font-medium mb-8 text-center">{heading}</h2>
    )
}