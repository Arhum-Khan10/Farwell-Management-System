USE fms;

-- Delete items from menu if their name is null
DELETE FROM MenuItem WHERE ItemName IS NULL;