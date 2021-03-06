import { useState, useEffect, useContext } from "react";
import { QDocContext } from "../enigma/docProvider";

const useLayoutSessionObject = (definition) => {
	const [data, setData] = useState();
	const qdoc = useContext(QDocContext);

	useEffect(() => {
		const DataFromSessionObject = async () => {
			const app = await qdoc.createSessionObject(definition);
			const layout = await app.getLayout();
			const dataset = layout.qHyperCube.qDataPages[0].qMatrix;
			setData(dataset);
		};
		DataFromSessionObject();
	}, [qdoc, definition]);
	return data;
};

export default useLayoutSessionObject;
