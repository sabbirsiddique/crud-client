
const Blog = () => {
    return (
        <div>
            
            <div className="max-w-[1200px] mx-auto rounded-xl bg-gray-100 p-10 max-h-screen">
                    <p className="text-2xl font-bold mb-3">1. What is One way data binding?</p>
                    <p className="mb-3 text-xl"> <u><b>Answer:</b></u> One way data binding connect data from a source to a target, ensuring the target reflects the latest source state. Data flows in one direction, from source to target, or its triggered by event. This technique simplifies UI development and makes it more responsive.</p>

                    <p className="text-2xl font-bold mb-3">2. What is NPM in node.js?
</p>
                    <p className="mb-3 text-xl"> <u><b>Answer:</b></u> NPM(Node Pacakage Manger) isa paccakage manager for javaScript, making it easy to share and reuse code. It includes a command line tool for managing project dependencies and registry with over 1.8 million package. NPM esential for any node.js developer.</p>

                    <p className="text-2xl font-bold mb-3">3. Different between Mongodb database vs mySQL database</p>
                    <p className="mb-3 text-xl"> <u><b>Answer:</b></u> 
                        <table className="border-separate border-spacing-2 border border-slate-400 ">
                            <tr>
                                <th className="border border-slate-300">Feature</th>
                                <th className="border border-slate-300">MongoDB</th>
                                <th className="border border-slate-300">MySQL
</th>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Data model</td>
                                <td className="border border-slate-300">NoSQL</td>
                                <td className="border border-slate-300">Relational</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Data structure</td>
                                <td className="border border-slate-300">JSON-like documents	</td>
                                <td className="border border-slate-300">Tables</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Schema</td>
                                <td className="border border-slate-300">Schema</td>
                                <td className="border border-slate-300">Schemaful</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Scalability</td>
                                <td className="border border-slate-300">Horizontal</td>
                                <td className="border border-slate-300">Vertical</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Consistency</td>
                                <td className="border border-slate-300">Eventual</td>
                                <td className="border border-slate-300">Strong</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Use cases	</td>
                                <td className="border border-slate-300">Unstructured data, mobile applications, real-time analytics	</td>
                                <td className="border border-slate-300">Structured data, e-commerce platforms, online banking</td>
                            </tr>
                        </table>
                    </p>
            </div>

            
        </div>
    );
};

export default Blog;