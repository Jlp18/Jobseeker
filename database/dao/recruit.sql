#sql("searchList")
	SELECT
		r.id,
		r.job,
		r.salary,
		r.city,
		r.education,
		r.experience,
		r.company_id,
		c.name,
		r.welfare,
		r.type,
		r.property,
		CASE DATE_FORMAT(r.create_time,"%Y-%m-%d")
			WHEN CURDATE() THEN "今天"
			ELSE DATE_FORMAT(r.create_time,"%Y-%m-%d")
		END AS create_time
	FROM
		recruit r join company c ON r.company_id=c.id
	ORDER BY create_time DESC LIMIT ?,?;
#end

#sql("searchListplus")
	SELECT
		r.id,
		r.job,
		r.salary,
		r.city,
		r.education,
		r.experience,
		c.name,
		r.welfare,
		r.type,
		r.property,
		CASE DATE_FORMAT(r.create_time,"%Y-%m-%d")
			WHEN CURDATE() THEN "今天"
			ELSE DATE_FORMAT(r.create_time,"%Y-%m-%d")
		END AS create_time
	FROM
		recruit r join company c ON r.company_id=c.id
    WHERE
    r.id=?;
#end