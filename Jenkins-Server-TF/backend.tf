terraform {
  backend "s3" {
    bucket         = "my-bucket-for-three-tier-web-app-myatty"
    region         = "ap-southeast-1"
    key            = "End-to-End-Kubernetes-Three-Tier-DevSecOps-Project/Jenkins-Server-TF/terraform.tfstate"
    encrypt        = true
    use_lockfile   = true 
  }
  required_version = ">=0.13.0"
  required_providers {
    aws = {
      version = ">= 2.7.0"
      source  = "hashicorp/aws"
    }
  }
}