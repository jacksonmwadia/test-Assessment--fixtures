CREATE PROCEDURE registerUser
    @user_id VARCHAR(50),
    @name VARCHAR(255),
    @email VARCHAR(255),
    @role VARCHAR(50),
    @password VARCHAR(255),
    @areaofspecialization VARCHAR(255)
AS
BEGIN
    INSERT INTO Users (user_id, name, email, role, password, areaofspecialization)
    VALUES (@user_id, @name, @email, @role, @password, @areaofspecialization);
END;
