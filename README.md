# Three-Tier Web Application Deployment on AWS EKS

This repository demonstrates the complete deployment of a three-tier web application (ReactJS frontend, NodeJS backend, MongoDB database) on Amazon EKS (Elastic Kubernetes Service), integrated with DevOps and GitOps tools for CI/CD, monitoring, and automation.

---

## Table of Contents
- [Application Code](#application-code)
- [Jenkins Pipeline Code](#jenkins-pipeline-code)
- [Jenkins Server Infrastructure (Terraform)](#jenkins-server-infrastructure-terraform)
- [Kubernetes Manifests](#kubernetes-manifests)
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Application Code

The `Application-Code` directory contains the complete source code:
- **Frontend**: Built using ReactJS.
- **Backend**: Developed in NodeJS.
- **Database**: MongoDB.

---

## Jenkins Pipeline Code

The `Jenkins-Pipeline-Code` directory includes pipeline scripts designed to automate the CI/CD process:
- Code build and test
- Docker image creation
- Deployment to Kubernetes

---

## Jenkins Server Infrastructure (Terraform)

The `Jenkins-Server-TF` directory provides Terraform code to deploy a Jenkins server on AWS. This automates:
- EC2 provisioning
- Security group configurations
- IAM roles and permissions

---

## Kubernetes Manifests

All manifest files required to deploy the application on EKS are in the `Kubernetes-Manifests-Files` directory. This includes:
- Deployments
- Services
- ConfigMaps
- Ingress definitions

---

## Project Overview

### Tools & Technologies:
- **Infrastructure**: Terraform, AWS CLI
- **CI/CD**: Jenkins, SonarQube, Docker, kubectl
- **Monitoring**: Prometheus, Grafana (via Helm)
- **GitOps**: ArgoCD
- **Container Registry**: AWS ECR

### Key Features:
- IAM and VPC setup using Terraform
- Jenkins deployed and integrated with AWS
- EKS cluster provisioning and autoscaling
- Private container image storage on ECR
- Monitoring stack with Prometheus and Grafana
- GitOps-based delivery using ArgoCD
- Automated build and deploy pipelines

This project ensures scalable, observable, and secure delivery pipelines for cloud-native applications.

---

## Getting Started

To begin, follow the end-to-end documentation linked here:  
**Guide**: [Advanced DevSecOps on AWS EKS with ArgoCD and Prometheus](https://amanpathakdevops.medium.com/advanced-end-to-end-devsecops-kubernetes-three-tier-project-using-aws-eks-argocd-prometheus-fbbfdb956d1a)

The guide includes:
- IAM user setup
- Terraform infrastructure provisioning
- CI/CD pipeline integration
- Kubernetes deployment
- GitOps and Monitoring setup

---

## Contributing

Contributions are welcome. Open an issue or pull request for improvements, bug fixes, or new features.

---

## License

This project is licensed under the [MIT License](LICENSE).
