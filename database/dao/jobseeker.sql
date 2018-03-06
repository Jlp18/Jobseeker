#sql("login")
SELECT 
	COUNT(*)
FROM jobseeker
WHERE
	username=? AND
	password=HEX(AES_ENCRYPT(?,"nebula"));
#end

#sql("add")
INSERT INTO jobseeker
   SET
      id=NEXT VALUE FOR MYCATSEQ_JOBSEEKER,
      username=?,
      PASSWORD = HEX(AES_ENCRYPT(?,"nebula"));
#end

#sql("hasUser")
SELECT
   COUNT(*)
FROM
   jobseeker
WHERE
   username=?;
#end


#sql("searchJobseekerInfo")
SELECT
   username,
   tel,
   email,
   exp,
   type
FROM 
   jobseeker
WHERE
   id=(SELECT 
          id
       FROM 
          jobseeker
       WHERE
          username=?
);
   
#end





