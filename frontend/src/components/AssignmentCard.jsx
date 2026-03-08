import { Link } from "react-router-dom"

function AssignmentCard({ assignment }) {
    return (
        <div className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">
                {assignment.title}
            </h2>

            <p className="text-sm text-gray-600">
                {assignment.description}
            </p>

            <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                {assignment.difficulty}
            </span>

            <div className="mt-3">
                <Link
                    to={`/assignment/${assignment._id}`}
                    className="bg-black text-white px-3 py-1 rounded"
                >
                    Solve
                </Link>
            </div>
        </div>
    )
}

export default AssignmentCard