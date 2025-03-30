export type Props = {
    projectId: string;
    params: Promise<{projectId: string}>;
}

export type Stack = {
    term_id: string;
    name: string;
}