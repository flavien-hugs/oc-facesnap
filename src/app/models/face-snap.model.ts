import { SnapType } from './snap-type.type';

export class FaceSnap {
    id: string;
    location?: string;

    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdDate: Date,
        public snaps: number
    ) {
        this.id = crypto.randomUUID().substring(0, 32);
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    snap(snapType: SnapType) {
        if (snapType === 'snap') {
            this.addSnap();
        } else if (snapType === 'unsnap') {
            this.removeSnap();
        } else {
            throw new Error('Snap select not found !');
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}
