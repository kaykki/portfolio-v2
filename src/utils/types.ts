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

export type Project = {
    id: string,
    link: string,
    title: {
        rendered: string
    };
    acf: {
        showcase: {
            project_overview: string
            project_preview: {
                url: string;
                mime_type: string;
            };

        };
        development: {
            tools: Stack[];
            tools_category: string;
        };
        design: {

        };
        ctas: {
            links: {
                title: string;
                url: string;
                target: string;
            }
        };
    }
}