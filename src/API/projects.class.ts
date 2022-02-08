import Project from './project.class'
import projectsData from './projects.data';

class Projects {
    all: Project[];
    active: number;

    /**
     * 
     * @param {Project[]} projects Array of Project Objects
     * 
     */
    constructor (projects: Project[]) {
        this.all = projects;
        this.active = 0;

        this.init();
    }

    init() {
        this.all.sort( function( a, b ) {
            if(a.category === "Personal") {
                return -1;
            } else if(a.category === b.category) {
                return 0;
            } else {
                return 1;
            }
        })
    }

    getActive() {
        return this.all[this.active];
    }

    nextActive() {
        this.active++;
        if(this.active > this.all.length - 1) {
            this.active = 0;
        }

        return this.getActive();
    }

    prevActive() {
        this.active--;
        if(this.active < 0) {
            this.active = this.all.length -1
        }

        return this.getActive();
    }

    
}

export default new Projects(projectsData);