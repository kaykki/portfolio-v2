export type Props = {
    projectId: string;
    params: Promise<{projectId: string}>;
}

export type Stack = {
    icon: {
        id: string,
        url: string
    };
    name: string;
}