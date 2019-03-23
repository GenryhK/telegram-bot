module.exports.returnMutationLinkAddTimeEntries = (object)=> {
    return `
        mutation {
            insert_timeTracker(
                objects: [
                    {
                        name: "${object.name}",
                        date: "${object.date}",
                        timeFrom: "${object.timeFrom}",
                        timeTo: "${object.timeTo}",
                        timePassed: "${object.timePassed}",
                        project: "${object.project}",
                        userId: "${object.userId}",
                        email: "${object.email}",
                    }
                ]
            ){
                affected_rows
            }
        }`;
}