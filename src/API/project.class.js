class Project {
    /**
     * 
     * @param {Object} data
     * @param {string} data.name Project Name
     * @param {string} data.category "Personal | Professional | School"
     * @param {string} data.gitURL github URL
     * @param {string} data.demoURL demo URL
     * @param {string} data.summary Project Headline
     * @param {string} data.description Detailed project Description
     * @param {string} data.tools Comma Seperated list of tools
     * @param {(string|string[])} data.images Array of string image url 
     *                                        - images/project/ *URL*
     * 
     */
    constructor (data) {
        this.name = data.name
        this.category = data.category
        this.gitURL = data.gitURL
        this.demoURL = data.demoURL
        this.summary = data.summary
        this.description = data.description
        this.tools = data.tools ? data.tools.split(",") : null
        this.images = data.images

    }


}

export default Project;