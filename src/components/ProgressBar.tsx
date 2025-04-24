const ProgressBar = ({ value, max }: { value: number, max: number }) => {
    return (
        <div>
            <div className="w-full h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-blue-500 rounded-full" style={{ width: `${value / max * 100}%` }}></div>
            </div>
        </div>
    )
}

export default ProgressBar;