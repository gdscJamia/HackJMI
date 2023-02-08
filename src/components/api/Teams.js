import { gql } from "graphql-request"
import { hygraph } from "../../utils/hygraph"
import { TeamTypes } from "../../utils/constant";

export class TeamService {
    constructor() {
        this.members = new Map()
        this.teams = new Map()
        this.list = [];
        this.judges
    }

    serializeMembers = (members = []) => {
        this.list = members;
        for (const member of members) {
            this.members.set(member.id, member)

            for (const type of member.types) {
                if (!this.teams.has(type)) {
                    this.teams.set(type, [])
                }
                this.teams.get(type).push(member)
            }
        }
    }
}

export const getTeams = async () => {
    const { teams } = await hygraph.request(
        gql`
        query {
            teams(first: 100){
                id,
                name,
                head,
                designation,
                types,
                linkedIn,
                photo{
                    url
                }
            }
        }
        `
    )

    const teamService = new TeamService()
    teamService.serializeMembers(teams)
    return teamService
}