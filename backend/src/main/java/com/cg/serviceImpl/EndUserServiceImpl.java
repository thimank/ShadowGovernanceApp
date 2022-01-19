package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.EndUser;
import com.cg.entity.TaskDetails;
import com.cg.exception.EnduserNotFoundException;
import com.cg.repository.EndUserRepo;
import com.cg.service.EndUserService;

@Service
public class EndUserServiceImpl implements EndUserService {

	@Autowired
	EndUserRepo endUserRepo;

	@PersistenceContext
	EntityManager em;

	@Override
	public EndUser addEndUser(EndUser user) {
		Optional<EndUser> opt = endUserRepo.findById(user.getId());
		if (opt.isPresent() == false)
			endUserRepo.save(user);
		else {
			return opt.get();
		}
		throw new EnduserNotFoundException("END-USER Not Found");
	}

	@Override
	public EndUser editEndUser(EndUser user) {
		Optional<EndUser> opt = endUserRepo.findById(user.getId());
		if (opt.isPresent() == false)
			throw new EnduserNotFoundException("END-USER Not Found");
		else {
			endUserRepo.save(user);
			return user;
		}
	}

	@Override
	public EndUser removeEndUser(int id) {
		Optional<EndUser> opt = endUserRepo.findById(id);
		if (opt.isPresent() == false)
			throw new EnduserNotFoundException("END-USER Not Found");
		else {
			endUserRepo.deleteById(id);
			return opt.get();
		}
	}

	@Override
	public EndUser viewEndUser(int id) {
		Optional<EndUser> opt = endUserRepo.findById(id);
		if (opt.isPresent() == false)
			throw new EnduserNotFoundException("END-USER Not Found");
		else
			return opt.get();
	}

	@Override
	public List<EndUser> listAllEndUsers() {
		return endUserRepo.findAll();
	}

	@Override
	public List<EndUser> searchTaskbyCriteria(TaskDetails criteria) {

		String fromDate = criteria.getFromDate();
		String toDate = criteria.getToDate();
		String bu = criteria.getBu();
		String taskDesc = criteria.getTaskDesc();
		boolean export = criteria.getExportData();

		if (bu == null || bu == "")
			bu = "%";
		if (taskDesc == null || taskDesc == "")
			taskDesc = "%";
		if (toDate == null || toDate == "")
			toDate = "%";

		TypedQuery<EndUser> query1 = em.createQuery(
				"select u from EndUser u where  u.bu like :b  and u.taskDesc like:td and (u.date Between :d1 and :d2 )",
				EndUser.class);

		query1.setParameter("b", bu);
		query1.setParameter("td", taskDesc);
		query1.setParameter("d1", fromDate);
		query1.setParameter("d2", toDate);

		if (export == true) {
			TypedQuery<EndUser> query2 = em.createQuery(
					"select u from EndUser u where  u.bu like :b  and u.taskDesc like:td and (u.date Between :d1 and :d2 ) INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';",
					EndUser.class);

			query2.setParameter("b", bu);
			query2.setParameter("td", taskDesc);
			query2.setParameter("d1", fromDate);
			query2.setParameter("d2", toDate);
			
			query2.executeUpdate();
		}

		return query1.getResultList();
	}

}
