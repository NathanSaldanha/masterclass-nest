import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from 'node:crypto';
import { Injectable } from "@nestjs/common";
import { TeamMembersRepository } from "../team-members-repository";

@Injectable()
export class PrismaTeamMembersRepository implements TeamMembersRepository{
    constructor(private prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.teamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction
            }
        })
    }
}