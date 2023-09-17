export const encryptPassword = async (pass: string) => {
    const password = await Bun.password.hash(pass, {
        algorithm: "bcrypt",
        cost: 4,
    })

    return password;
}
