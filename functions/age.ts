export const getAge = (): number => {
    let birth: Date = new Date("Jun 21 2002 00:00:00 GMT-0600");
    let today: Date = new Date();

    let wasBirthdayCelebratedOnThisYear: boolean = false;

    if (today.getMonth() == birth.getMonth() &&
        today.getDate() >= birth.getDate()) {
        wasBirthdayCelebratedOnThisYear = true;
    } else if (today.getMonth() > birth.getMonth()) {
        wasBirthdayCelebratedOnThisYear = true;
    };

    return today.getFullYear() - birth.getFullYear() + (wasBirthdayCelebratedOnThisYear ? 0 : -1);
}