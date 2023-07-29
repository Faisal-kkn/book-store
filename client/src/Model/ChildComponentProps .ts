import React from 'react'
export interface HeadingProps {
    search: string
    setSearch: (value: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
