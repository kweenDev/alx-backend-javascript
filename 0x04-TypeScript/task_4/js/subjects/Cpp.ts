// task_4/js/subjects/Cpp.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    // Declaration merging to add experienceTeachingC
    export interface Teacher {
      experienceTeachingC?: number;
    }

    // Cpp class extending Subject
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }

      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingC
          ? `Available Teacher: ${this.teacher.firstName}`
          : 'No available teacher';
      }
    }
}