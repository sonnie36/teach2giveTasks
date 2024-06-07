CREATE OR ALTER PROCEDURE craeteNote(
    @id VARCHAR(255),
    @title VARCHAR(100),
    @content VARCHAR(300),
    @createdAt DATETIME
)
AS
BEGIN
    INSERT INTO Notes(id, title, content, createdAt)
    VALUES(@id, @title, @content, @createdAt)
END

