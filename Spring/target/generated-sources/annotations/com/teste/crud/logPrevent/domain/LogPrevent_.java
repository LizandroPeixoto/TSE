package com.teste.crud.logPrevent.domain;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(LogPrevent.class)
public abstract class LogPrevent_ {

	public static volatile SingularAttribute<LogPrevent, String> request;
	public static volatile SingularAttribute<LogPrevent, Date> data;
	public static volatile SingularAttribute<LogPrevent, String> ip;
	public static volatile SingularAttribute<LogPrevent, Integer> id;
	public static volatile SingularAttribute<LogPrevent, String> user_agent;
	public static volatile SingularAttribute<LogPrevent, String> status;

}

