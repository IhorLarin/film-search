type StatusMessageProps = {
    loading: boolean
    error: string | null
}

const StatusMessage = ({ loading, error }: StatusMessageProps) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">{error}</p>
    return null
};
export default StatusMessage;
