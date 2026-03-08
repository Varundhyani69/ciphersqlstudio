import Editor from "@monaco-editor/react"

function QueryEditor({ query, setQuery }) {
    return (
        <Editor
            height="200px"
            defaultLanguage="sql"
            value={query}
            onChange={(value) => setQuery(value)}
        />
    )
}

export default QueryEditor