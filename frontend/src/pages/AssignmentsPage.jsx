import { useEffect, useState } from "react"
import axiosClient from "../api/axiosClient"
import AssignmentCard from "../components/AssignmentCard"

function AssignmentsPage() {
    const [assignments, setAssignments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const res = await axiosClient.get("/assignments")
                setAssignments(res.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchAssignments()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-600">
                Loading assignments...
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-8">
                    SQL Practice
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {assignments.map((a) => (
                        <AssignmentCard key={a._id} assignment={a} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default AssignmentsPage