export const Card = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <section className="bg-white shadow-md rounded-lg p-4">
            {children}
        </section>
    );
}