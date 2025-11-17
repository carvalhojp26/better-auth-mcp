import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer(
    { name: 'better-auth-mcp', version: '0.1.0' },
    { capabilities: { tools: {}}}
);

const main = async () => {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("BetterAuth MCP server started");
}

main();