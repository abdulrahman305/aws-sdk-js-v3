// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySecurityGroupRulesRequest, ModifySecurityGroupRulesResult } from "../models/models_6";
import { de_ModifySecurityGroupRulesCommand, se_ModifySecurityGroupRulesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySecurityGroupRulesCommand}.
 */
export interface ModifySecurityGroupRulesCommandInput extends ModifySecurityGroupRulesRequest {}
/**
 * @public
 *
 * The output of {@link ModifySecurityGroupRulesCommand}.
 */
export interface ModifySecurityGroupRulesCommandOutput extends ModifySecurityGroupRulesResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the rules of a security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySecurityGroupRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySecurityGroupRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifySecurityGroupRulesRequest
 *   GroupId: "STRING_VALUE", // required
 *   SecurityGroupRules: [ // SecurityGroupRuleUpdateList // required
 *     { // SecurityGroupRuleUpdate
 *       SecurityGroupRuleId: "STRING_VALUE", // required
 *       SecurityGroupRule: { // SecurityGroupRuleRequest
 *         IpProtocol: "STRING_VALUE",
 *         FromPort: Number("int"),
 *         ToPort: Number("int"),
 *         CidrIpv4: "STRING_VALUE",
 *         CidrIpv6: "STRING_VALUE",
 *         PrefixListId: "STRING_VALUE",
 *         ReferencedGroupId: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifySecurityGroupRulesCommand(input);
 * const response = await client.send(command);
 * // { // ModifySecurityGroupRulesResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifySecurityGroupRulesCommandInput - {@link ModifySecurityGroupRulesCommandInput}
 * @returns {@link ModifySecurityGroupRulesCommandOutput}
 * @see {@link ModifySecurityGroupRulesCommandInput} for command's `input` shape.
 * @see {@link ModifySecurityGroupRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifySecurityGroupRulesCommand extends $Command<
  ModifySecurityGroupRulesCommandInput,
  ModifySecurityGroupRulesCommandOutput,
  EC2ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ModifySecurityGroupRulesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifySecurityGroupRulesCommandInput, ModifySecurityGroupRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySecurityGroupRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySecurityGroupRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifySecurityGroupRules",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifySecurityGroupRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySecurityGroupRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySecurityGroupRulesCommandOutput> {
    return de_ModifySecurityGroupRulesCommand(output, context);
  }
}
