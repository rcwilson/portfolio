export default class Project {
    /**
     * 
     * @param {Object} data
     * @param {string} data.name Project Name
     * @param {string} data.category "Personal | Professional | School"
     * @param {string} data.gitURL github URL
     * @param {string} data.demoURL demo URL
     * @param {string} data.summary Project Headline
     * @param {string|string[]} data.description Detailed project Description
     * @param {string} data.tools Comma Seperated list of tools
     * @param {(string|string[])} data.images Array of string image url 
     *                                        - images/project/ *URL*
     * 
     */
    name: string;
    category: string;
    gitURL?: string;
    demoURL?: string;
    summary: string;
    description: string | string[];
    tools: string | string[];
    images: string | string[];

    constructor (data: { name: string; category: string; gitURL?: string; demoURL?: string; summary: string; description: string | string[]; tools: string | string[]; images: string | string[]; }) {
        this.name = data.name
        this.category = data.category
        this.gitURL = data.gitURL ?? '';
        this.demoURL = data.demoURL ?? '';
        this.summary = data.summary
        this.description = data.description
        this.tools = data.tools;
        this.images = data.images;

        this.init();

    }

    init() {
        if (typeof this.tools === 'string') {
            this.tools = this.tools.split(",");
        }
    }

}