CREATE PROCEDURE updateUser
    @user_id VARCHAR(50),
    @name VARCHAR(255),
    @email VARCHAR(255),
    @role VARCHAR(50),
    @areaofspecialization VARCHAR(255)
AS
BEGIN
    UPDATE Users
    SET name = @name,
        email = @email,
        role = @role,
        areaofspecialization = @areaofspecialization
    WHERE user_id = @user_id;
END;
