import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "../api/axiosClient"
import QueryEditor from "../components/QueryEditor"
import ResultTable from "../components/ResultTable"
import HintBox from "../components/HintBox"

function AssignmentPage() {
    const { id } = useParams()

    const [assignment, setAssignment] = useState(null)
    const [query, setQuery] = useState("")
    const [rows, setRows] = useState([])
    const [hint, setHint] = useState("")

    const [queryLoading, setQueryLoading] = useState(false)
    const [hintLoading, setHintLoading] = useState(false)

    useEffect(() => {
        const fetchAssignment = async () => {
            const res = await axiosClient.get(`/assignments/${id}`)
            setAssignment(res.data)
        }

        fetchAssignment()
    }, [id])

    const executeQuery = async () => {
        setQueryLoading(true)

        try {
            const res = await axiosClient.post("/query/execute", {
                query
            })

            setRows(res.data.rows)
        } catch (err) {
            console.error(err)
        }

        setQueryLoading(false)
    }

    const getHint = async () => {
        setHintLoading(true)

        try {
            const res = await axiosClient.post("/hint", {
                question: assignment.question,
                userQuery: query
            })

            setHint(res.data.hint)
        } catch (err) {
            console.error(err)
        }

        setHintLoading(false)
    }

    if (!assignment) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-600">
                Loading assignment...
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">

            <div className="max-w-5xl mx-auto space-y-6">

                {/* Question Card */}

                <div className="bg-white p-6 rounded shadow">

                    <h1 className="text-2xl font-bold mb-3">
                        {assignment.title}
                    </h1>

                    <p className="text-gray-700">
                        {assignment.question}
                    </p>

                </div>


                {/* SQL Editor */}

                <div className="bg-white p-6 rounded shadow">

                    <QueryEditor query={query} setQuery={setQuery} />

                    <div className="flex gap-3 mt-4">

                        <button
                            onClick={executeQuery}
                            disabled={queryLoading}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
                        >
                            {queryLoading ? "Running..." : "Execute Query"}
                        </button>

                        <button
                            onClick={getHint}
                            disabled={hintLoading}
                            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
                        >
                            {hintLoading ? "Generating Hint..." : "Get Hint"}
                        </button>

                    </div>

                </div>


                {/* Results */}

                <div className="bg-white p-6 rounded shadow">

                    <h2 className="text-lg font-semibold mb-3">
                        Results
                    </h2>

                    <ResultTable rows={rows} />

                </div>


                {/* Hint */}

                <div className="bg-white p-6 rounded shadow">

                    <h2 className="text-lg font-semibold mb-3">
                        Hint
                    </h2>

                    {hintLoading ? (
                        <p className="text-gray-500">Generating hint...</p>
                    ) : (
                        <HintBox hint={hint} />
                    )}

                </div>

            </div>

        </div>
    )
}

export default AssignmentPage