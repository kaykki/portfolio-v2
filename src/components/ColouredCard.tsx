export const ColouredCard = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <div className="flex items-center bg-[#004D57] shadow-md rounded-lg p-4">
            {children}
        </div>
    );
}