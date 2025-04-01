import { useState } from "react";
import "./styles.css";
import explorer from "./data/foldersdata";
import Folder from "./components/folder";
import useTraverseTree from "./hooks/usetraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const insertNode = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  // console.log(explorerData);
  return (
    <div className="App">
      <h1>Folders Structure like VS Code</h1>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
