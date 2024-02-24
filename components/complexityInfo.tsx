interface ComplexityInfoProps {
    complexity: string;
    title: string;
}

export const ComplexityInfo: React.FC<ComplexityInfoProps> = ({ complexity, title }) => {
    return (
        <p className="flex w-full text-sm text-gray-500">
            <span className="w-28">
                {title}:
            </span>
            <span>
                {complexity}
            </span>
        </p>
    )
}