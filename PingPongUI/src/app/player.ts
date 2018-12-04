import {SkillLevel} from './skill-level';

// Player class to define this object's properties.
export class Player {
    constructor(
        public playerId: string,
        public firstName: string,
        public lastName: string,
        public age: string,
        public emailAddress: string,
        public skillLevel: SkillLevel
    ){}
}