function HintBox({ hint }) {
    if (!hint) return null

    return (
        <div className="mt-4 p-3 bg-yellow-100 rounded">
            <p>{hint}</p>
        </div>
    )
}

export default HintBox