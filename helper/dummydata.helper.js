const moment = require("moment/moment")

module.exports = {
    generateDummyData : () => {
        return [
            {
                date: moment().subtract(1, 'days').subtract(15, 'hours'),
                time: moment().subtract(1, 'days').subtract(15, 'hours').format('HH:mm'),
                name: "Bug Testing",
                shortDescription: "Assess and prioritize reported bugs, assigning them to team members for resolution based on severity.",
                isDone: true
            },
            {
                date: moment().subtract(1, 'days'),
                time: moment().subtract(1, 'days').format('HH:mm'),
                name: "Technical Documentation",
                shortDescription: "Create and update technical documentation for new features and architectural decisions to ensure team alignment.",
                isDone: true
            },
            {
                date: moment().subtract(3, 'hours'),
                time: moment().subtract(3, 'hours').format('HH:mm'),
                name: "Social Connection",
                shortDescription: "Schedule a weekly catch-up with friends or family, either in person or virtually, to strengthen social bonds and unwind.",
                isDone: true
            },
            {
                date: moment().add(30, 'minutes'),
                time: moment().add(30, 'minutes').format('HH:mm'),
                name: "Feature Development",
                shortDescription: "Implement a new API endpoint based on user feedback, ensuring it adheres to RESTful standards and is well-documented.",
                isDone: false
            },
            {
                date: moment().add(1, 'hours').add(15, 'minutes'),
                time: moment().add(1, 'hours').add(15, 'minutes').format('HH:mm'),
                name: "Bug Testing",
                shortDescription: "Assess and prioritize reported bugs, assigning them to team members for resolution based on severity.",
                isDone: false
            },
            {
                date: moment().add(2, 'hours').add(15, 'minutes'),
                time: moment().add(2, 'hours').add(15, 'minutes').format('HH:mm'),
                name: "Daily Exercise Routine",
                shortDescription: "Schedule a 30-minute workout each day, choosing activities like jogging, yoga, or strength training to boost energy and reduce stress.",
                isDone: false
            },
            {
                date: moment().add(3, 'hours'),
                time: moment().add(3, 'hours').format('HH:mm'),
                name: "Technical Documentation",
                shortDescription: "Create and update technical documentation for new features and architectural decisions to ensure team alignment.",
                isDone: false
            },
            {
                date: moment().add(1, 'days'),
                time: moment().add(1, 'days').format('HH:mm'),
                name: "Dependency Management",
                shortDescription: "Review and update project dependencies, ensuring that all packages are secure and up to date.",
                isDone: false
            },
            {
                date: moment().add(1, 'days').add('30', 'minutes'),
                time: moment().add(1, 'days').add('30', 'minutes').format('HH:mm'),
                name: "Code Review",
                shortDescription: "Review pull requests from team members, providing constructive feedback and ensuring code quality.",
                isDone: false
            },
            {
                date: moment().add(1, 'days').add('1', 'hours').add('30', 'minutes'),
                time: moment().add(1, 'days').add('1', 'hours').add('30', 'minutes').format('HH:mm'),
                name: "Performance Optimization",
                shortDescription: "Profile the application to identify bottlenecks and refactor code to improve performance and response times.",
                isDone: false
            },
            {
                date: moment().add(2, 'days'),
                time: moment().add(2, 'days').format('HH:mm'),
                name: "Code Review",
                shortDescription: "Review pull requests from team members, providing constructive feedback and ensuring code quality.",
                isDone: false
            },
            {
                date: moment().add(2, 'days').add(2, 'hours'),
                time: moment().add(2, 'days').add(2, 'hours').format('HH:mm'),
                name: "Retrospective Meeting",
                shortDescription: "Facilitate a retrospective meeting to gather team feedback, identify areas for improvement, and plan actionable next steps.",
                isDone: false
            },
            {
                date: moment().add(3, 'days').add(2, 'hours'),
                time: moment().add(3, 'days').add(2, 'hours').format('HH:mm'),
                name: "Tool Evaluation",
                shortDescription: "Research and evaluate new tools or technologies that could improve team productivity and project delivery.",
                isDone: false
            },
            {
                date: moment().add(3, 'days').add(4, 'hours'),
                time: moment().add(3, 'days').add(4, 'hours').format('HH:mm'),
                name: "Social Connection",
                shortDescription: "Schedule a weekly catch-up with friends or family, either in person or virtually, to strengthen social bonds and unwind.",
                isDone: false
            },
        ]
    }
}
