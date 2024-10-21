export class CurrentDateTime {

    getCurrentDateTime(): string {
        const today: Date = new Date();

        const day = this.padZero(today.getDate());
        const month = this.padZero(today.getMonth() + 1);
        const year = today.getFullYear();

        const hours = this.padZero(today.getHours());
        const minutes = this.padZero(today.getMinutes());

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    private padZero(value: number): string {
        return value < 10 ? '0' + value : value.toString();
    }
}