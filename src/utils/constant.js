export const formState = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
}

export const TeamTypes = {
    All: 'All',
    Technical: 'Technical',
    Mentor: 'Mentor',
    Organizing: 'Organizing',
    Design: 'Design',
    Social_Media_And_Content: 'Social_Media_And_Content',
    Judge: 'Judge',
    Speaker: 'Speaker',
    Outreach: 'Outreach',
}

export const designationMap = {
    [TeamTypes.Technical]: 'Technical',
    [TeamTypes.Organizing]: 'Organizers',
    [TeamTypes.Design]: 'Design',
    [TeamTypes.Social_Media_And_Content]: 'Social Media & Content',
    [TeamTypes.Judge]: 'Judge',
    [TeamTypes.Speaker]: 'Speaker',
    [TeamTypes.Outreach]: 'Outreach',
    [TeamTypes.Mentor]: 'Mentor',
}